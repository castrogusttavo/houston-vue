
<template>
  <Icon :iconName="'manager'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ManagerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'manager'
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
