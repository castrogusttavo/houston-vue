
<template>
  <Icon :iconName="'flip-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-right'
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
