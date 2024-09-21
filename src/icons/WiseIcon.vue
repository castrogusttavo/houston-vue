
<template>
  <Icon :iconName="'wise'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WiseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wise'
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
