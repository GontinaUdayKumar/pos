import {
  Component,NgModule,Directive,Output, Input,EventEmitter, ViewContainerRef,Inject, ComponentFactoryResolver } from "@angular/core";
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [CommonModule],
// })
// class DynamicHtmlModule {}

@Directive({
  selector: 'dynamic-component-loader'
})
export class DynamicComponentLoader {
  @Input() component:Component;
  @Input() data;
  @Output() dataFromComponent = new EventEmitter();
  factoryResolver;
  rootViewContainer;
  viewRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver,
              @Inject(ViewContainerRef) viewContainerRef) {
    this.factoryResolver = factoryResolver;
    this.viewRef = viewContainerRef;
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  ngOnChanges() {
    if (!this.component) return;
    this.setRootViewContainerRef(this.viewRef);
    const factory = this.factoryResolver.resolveComponentFactory(this.component);
    const component = factory.create(this.rootViewContainer.parentInjector);
    if(this.data){
      component.instance.data = this.data;
    }
    if(component.instance.observeVariable){
      component.instance.observeVariable.subscribe(result=>{
        this.dataFromComponent.emit(result);
      })
    }
    this.rootViewContainer.insert(component.hostView);
  }
}
