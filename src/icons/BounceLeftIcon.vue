
<template>
  <Icon :iconName="'bounce-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BounceLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bounce-left'
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
