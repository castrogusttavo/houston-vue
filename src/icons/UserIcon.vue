
<template>
  <Icon :iconName="'user'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user'
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
