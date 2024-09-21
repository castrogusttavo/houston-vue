
<template>
  <Icon :iconName="'meta'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MetaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'meta'
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
