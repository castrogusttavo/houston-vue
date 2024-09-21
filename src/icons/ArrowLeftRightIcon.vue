
<template>
  <Icon :iconName="'arrow-left-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowLeftRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-left-right'
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
