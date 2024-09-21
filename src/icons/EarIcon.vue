
<template>
  <Icon :iconName="'ear'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ear'
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
