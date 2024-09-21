
<template>
  <Icon :iconName="'zoom-in-area'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZoomInAreaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zoom-in-area'
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
