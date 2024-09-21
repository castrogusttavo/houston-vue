
<template>
  <Icon :iconName="'knife-bread'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KnifeBreadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knife-bread'
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
