
<template>
  <Icon :iconName="'sharing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SharingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sharing'
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
