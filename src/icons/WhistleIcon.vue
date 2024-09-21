
<template>
  <Icon :iconName="'whistle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WhistleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'whistle'
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
