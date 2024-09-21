
<template>
  <Icon :iconName="'riyal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RiyalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'riyal'
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
