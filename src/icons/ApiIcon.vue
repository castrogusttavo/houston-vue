
<template>
  <Icon :iconName="'api'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'api'
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
