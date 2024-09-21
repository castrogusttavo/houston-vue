
<template>
  <Icon :iconName="'stroke-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrokeCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stroke-center'
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
