
<template>
  <Icon :iconName="'adzan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AdzanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'adzan'
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
