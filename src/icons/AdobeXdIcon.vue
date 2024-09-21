
<template>
  <Icon :iconName="'adobe-xd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdobeXdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adobe-xd'
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
