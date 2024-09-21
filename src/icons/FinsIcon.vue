
<template>
  <Icon :iconName="'fins'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FinsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fins'
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
