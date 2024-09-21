
<template>
  <Icon :iconName="'euro-receive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EuroReceiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'euro-receive'
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
