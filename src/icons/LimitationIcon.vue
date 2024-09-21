
<template>
  <Icon :iconName="'limitation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LimitationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'limitation'
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
