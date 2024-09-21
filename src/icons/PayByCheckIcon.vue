
<template>
  <Icon :iconName="'pay-by-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PayByCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pay-by-check'
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
