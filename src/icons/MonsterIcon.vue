
<template>
  <Icon :iconName="'monster'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MonsterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'monster'
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
