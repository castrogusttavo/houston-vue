
<template>
  <Icon :iconName="'logout-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LogoutCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-circle-01'
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
