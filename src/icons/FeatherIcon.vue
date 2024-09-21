
<template>
  <Icon :iconName="'feather'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FeatherIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'feather'
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
