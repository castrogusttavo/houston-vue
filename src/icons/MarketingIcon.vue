
<template>
  <Icon :iconName="'marketing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MarketingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'marketing'
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
