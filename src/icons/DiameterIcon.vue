
<template>
  <Icon :iconName="'diameter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiameterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diameter'
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
