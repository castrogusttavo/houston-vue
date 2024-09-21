
<template>
  <Icon :iconName="'zeppelin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZeppelinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zeppelin'
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
