
<template>
  <Icon :iconName="'profile'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProfileIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'profile'
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
