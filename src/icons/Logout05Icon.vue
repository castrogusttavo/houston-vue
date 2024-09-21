
<template>
  <Icon :iconName="'logout-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Logout05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-05'
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
