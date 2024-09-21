
<template>
  <Icon :iconName="'text-align-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-left'
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
