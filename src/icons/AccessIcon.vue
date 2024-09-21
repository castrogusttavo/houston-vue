
<template>
  <Icon :iconName="'access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'access'
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
