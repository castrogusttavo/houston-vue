
<template>
  <Icon :iconName="'gravity'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GravityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gravity'
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
