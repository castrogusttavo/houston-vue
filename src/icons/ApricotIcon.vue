
<template>
  <Icon :iconName="'apricot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApricotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apricot'
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
