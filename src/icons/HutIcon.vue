
<template>
  <Icon :iconName="'hut'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hut'
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
