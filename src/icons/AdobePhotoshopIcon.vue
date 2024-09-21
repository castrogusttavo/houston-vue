
<template>
  <Icon :iconName="'adobe-photoshop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobePhotoshopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-photoshop'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
