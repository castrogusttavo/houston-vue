
<template>
  <Icon :iconName="'flaticon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlaticonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flaticon'
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
