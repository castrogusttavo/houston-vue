
<template>
  <Icon :iconName="'look-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LookLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'look-left'
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
