
<template>
  <Icon :iconName="'rub-el-hizb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RubElHizbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rub-el-hizb'
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
