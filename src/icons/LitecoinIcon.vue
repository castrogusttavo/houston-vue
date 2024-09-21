
<template>
  <Icon :iconName="'litecoin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LitecoinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'litecoin'
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
