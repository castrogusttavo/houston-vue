
<template>
  <Icon :iconName="'kissing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KissingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kissing'
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
