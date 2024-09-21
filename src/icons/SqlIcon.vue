
<template>
  <Icon :iconName="'sql'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SqlIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sql'
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
