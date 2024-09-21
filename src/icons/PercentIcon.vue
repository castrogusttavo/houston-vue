
<template>
  <Icon :iconName="'percent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PercentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'percent'
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
