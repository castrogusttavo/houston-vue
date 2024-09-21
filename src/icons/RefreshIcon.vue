
<template>
  <Icon :iconName="'refresh'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RefreshIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'refresh'
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
