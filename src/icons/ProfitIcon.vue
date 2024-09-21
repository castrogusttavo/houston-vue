
<template>
  <Icon :iconName="'profit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProfitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'profit'
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
