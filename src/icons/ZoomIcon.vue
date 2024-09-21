
<template>
  <Icon :iconName="'zoom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZoomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zoom'
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
