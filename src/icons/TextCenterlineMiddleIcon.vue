
<template>
  <Icon :iconName="'text-centerline-middle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCenterlineMiddleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-centerline-middle'
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
