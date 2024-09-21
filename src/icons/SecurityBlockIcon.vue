
<template>
  <Icon :iconName="'security-block'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityBlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-block'
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
