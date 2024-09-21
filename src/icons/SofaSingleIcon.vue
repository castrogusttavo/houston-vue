
<template>
  <Icon :iconName="'sofa-single'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SofaSingleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sofa-single'
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
