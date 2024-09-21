
<template>
  <Icon :iconName="'bulb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BulbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bulb'
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
