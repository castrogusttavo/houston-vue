
<template>
  <Icon :iconName="'google'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google'
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
