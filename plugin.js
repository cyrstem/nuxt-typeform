import Vue from 'vue'
import { createWidget } from '@typeform/embed'

Vue.component('Typeform', {
  props: {
    formId: {
      type: String,
      required: true,
    },
    hideHeaders: {
      type: Boolean,
      default: true,
    },
    hideFooter: {
      type: Boolean,
      default: true,
    },
    opacity: {
      type: Number,
      default: 100,
    },
    buttonText: {
      type: String,
      default: undefined,
    },
    onSubmit: {
      type: Function,
      default: undefined,
    },
  },
  mounted() {
    const options = {
      hideHeaders: this.hideHeaders,
      hideFooter: this.hideFooter,
      opacity: this.opacity,
      buttonText: this.buttonText,
      onSubmit: this.onSubmit,
    }

    createWidget(this.formId, { container: this.$el, ...options })
  },
  render(createElement) {
    return createElement('div')
  },
})
