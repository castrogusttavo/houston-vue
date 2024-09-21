
<template>
  <Icon :iconName="'cottage'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CottageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cottage'
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
